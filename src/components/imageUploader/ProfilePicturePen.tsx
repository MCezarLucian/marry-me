"use client";

import { useEffect, useState } from "react";
import { DropzoneOptions } from "react-dropzone";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "../ui/FileInput";
import { Plus } from "lucide-react";
import { Pen } from "lucide-react"; // Import the pen icon

interface FileUploadDropzoneProps {
  profilePicture?: string;
}

async function urlToFile(
  url: string,
  filename: string,
  mimeType: string
): Promise<File> {
  const response: Response = await fetch(url, { mode: "cors" });
  if (!response.ok) {
    throw new Error(`Failed to fetch image. Status: ${response.status}`);
  }
  const blob: Blob = await response.blob();
  return new File([blob], filename, { type: mimeType });
}

const ProfilePicturePen = ({ profilePicture }: FileUploadDropzoneProps) => {
  const [files, setFiles] = useState<File[] | null>([]);

  useEffect(() => {
    const convertUrlsToFiles = async () => {
      if (profilePicture) {
        try {
          const convertedFile = await urlToFile(
            profilePicture,
            `image1.jpg`,
            "image/jpeg"
          );
          setFiles([convertedFile]);
        } catch (err) {
          console.error("Error converting URLs to files:", err);
        }
      }
    };

    convertUrlsToFiles();
  }, [profilePicture]);

  const dropzone = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    multiple: true,
    maxFiles: 1,
    maxSize: 1 * 1024 * 1024,
  } satisfies DropzoneOptions;

  return (
    <FileUploader
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={dropzone}
      className="relative w-[50px] h-[50px] rounded-full bg-lightGray border-2 flex items-center justify-center"
    >
      <FileInput>
        <div className="flex items-center justify-center w-full h-full rounded-full bg-transparent">
          {files?.[0] ? (
            <FileUploaderItem
              index={0}
              className="w-full h-full rounded-full overflow-hidden"
            >
              <img
                src={URL.createObjectURL(files[0])}
                alt={"photo1"}
                className="w-full h-full object-cover rounded-full"
              />
            </FileUploaderItem>
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <Pen className="text-slate-500" />
            </div>
          )}
        </div>
      </FileInput>
      {/* <FileUploaderContent className="hidden"></FileUploaderContent> */}
    </FileUploader>
  );
};

export default ProfilePicturePen;
