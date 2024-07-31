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
import { UserType } from "@/lib/types";

interface FileUploadDropzoneProps {
  user?: UserType;
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

const FileUploadDropzone = ({ user }: FileUploadDropzoneProps) => {
  const [files, setFiles] = useState<File[] | null>([]);

  useEffect(() => {
    const convertUrlsToFiles = async () => {
      if (user?.imageUrls) {
        try {
          const convertedFiles = await Promise.all(
            user.imageUrls.map((url, index) =>
              urlToFile(url, `image${index}.jpg`, "image/jpeg")
            )
          );
          setFiles(convertedFiles);
        } catch (err) {
          console.error("Error converting URLs to files:", err);
        }
      }
    };

    convertUrlsToFiles();
  }, [user]);

  const dropzone = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    multiple: true,
    maxFiles: 3,
    maxSize: 1 * 1024 * 1024,
  } satisfies DropzoneOptions;

  return (
    <FileUploader
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={dropzone}
      className="relative w-full p-4 h-[250px]"
    >
      <FileInput>
        <div className="flex items-center h-[220px] justify-center p-0 w-1/3 rounded-md absolute top-0 l-0 z-10 bg-transparent"></div>
      </FileInput>
      <FileUploaderContent className="grid grid-cols-3 max-h-[220px] items-center gap-2 p-0">
        <div className="w-full h-full p-0">
          {files?.[2] ? (
            <FileUploaderItem
              index={2}
              className="w-full p-0 rounded-md overflow-hidden h-[220px]"
            >
              <img
                src={URL.createObjectURL(files[2])}
                alt={"photo3"}
                height={"100%"}
                width={"100%"}
                className="h-full w-full p-0 max-h-[220px]"
              />
            </FileUploaderItem>
          ) : (
            <div className="w-full p-0 h-[220px] bg-slate-200 rounded-lg flex items-center justify-center">
              <Plus className="text-slate-500" />
            </div>
          )}
        </div>
        <div className="w-full h-full">
          {files?.[1] ? (
            <FileUploaderItem
              index={1}
              className="w-full p-0 rounded-md overflow-hidden h-[220px]"
            >
              <img
                src={URL.createObjectURL(files[1])}
                alt={"photo2"}
                height={"100%"}
                width={"100%"}
                className="h-full w-full p-0 max-h-[220px]"
              />
            </FileUploaderItem>
          ) : (
            <div className="w-full p-0 h-[220px] bg-slate-200 rounded-lg" />
          )}
        </div>
        <div className="w-full h-full p-0">
          {files?.[0] ? (
            <FileUploaderItem
              index={0}
              className="w-full p-0 rounded-md overflow-hidden h-[220px]"
            >
              <img
                src={URL.createObjectURL(files[0])}
                alt={"photo1"}
                height={"100%"}
                width={"100%"}
                className="h-full w-full p-0 max-h-[220px]"
              />
            </FileUploaderItem>
          ) : (
            <div className="w-full p-0 h-[220px] bg-slate-200 rounded-lg" />
          )}
        </div>
      </FileUploaderContent>
    </FileUploader>
  );
};

export default FileUploadDropzone;
