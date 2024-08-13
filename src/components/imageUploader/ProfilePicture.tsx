"use client";

import { useState } from "react";
import { DropzoneOptions } from "react-dropzone";
import { Plus } from "lucide-react";
import {
  FileInputProfile,
  FileUploaderContentProfile,
  FileUploaderItemProfile,
  FileUploaderProfile,
} from "../ui/FileInputProfile";
import { PICTURE_URL } from "../../configuration/api";

interface FileUploadDropzoneProps {
  profilePicture?: string;
}

const ProfilePicture = ({ profilePicture }: FileUploadDropzoneProps) => {
  const [files, setFiles] = useState<File | null | string>(
    profilePicture ? profilePicture : null
  );

  const dropzone = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    multiple: true,
    maxFiles: 1,
    maxSize: 1 * 1024 * 1024,
  } satisfies DropzoneOptions;

  return (
    <FileUploaderProfile
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={dropzone}
      className="relative w-full h-[350px]"
    >
      <FileInputProfile>
        <div className="flex items-center h-[320px] justify-center p-0 rounded-md absolute top-4 w-full l-0 bg-transparent">
          <div className="w-full p-0 h-[320px] bg-slate-200 rounded-lg flex items-center justify-center">
            <Plus className="text-slate-500" />
          </div>
        </div>
      </FileInputProfile>
      <FileUploaderContentProfile className="grid max-h-[320px] items-center p-0">
        <div className="w-full h-full p-0">
          {files && (
            <FileUploaderItemProfile
              index={0}
              className="w-full p-0 rounded-md overflow-hidden h-[320px]"
            >
              <img
                src={
                  typeof files === "string"
                    ? `${PICTURE_URL}${files}`
                    : URL.createObjectURL(files)
                }
                alt={"photo1"}
                height={"100%"}
                width={"100%"}
                className="h-full w-full p-0 max-h-[320px]"
              />
            </FileUploaderItemProfile>
          )}
        </div>
      </FileUploaderContentProfile>
    </FileUploaderProfile>
  );
};

export default ProfilePicture;
