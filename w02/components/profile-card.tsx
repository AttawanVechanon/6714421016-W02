import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  name: string;
  studentId: string;
  description: string;
  image: string;
  tags: string[];
};

export default function ProfileCard({ name, studentId, description, image, tags }: Props) {
  return (
    <Card className="overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      <CardHeader className="-mt-16 items-center text-center">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="size-32 rounded-full border-4 border-background object-cover shadow-md"
        />
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{studentId}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}