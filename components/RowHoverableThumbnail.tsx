import Image from "next/image";
import React from "react";

interface Props {
  thumbnailsPaths: string[];
}

function RowHoverableThumbnail({ thumbnailsPaths }: Props) {
  return (
    <div>
      {thumbnailsPaths.map((path) => (
        <div className="relative h-40 w-60">
          <Image src={path.replaceAll("\\", "/")} layout="fill" />
        </div>
      ))}
    </div>
  );
}

export default RowHoverableThumbnail;
