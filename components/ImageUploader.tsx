import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const ImageUploader = () => {
  const [files, setFiles] = useState<Array<{ name: string; preview: string }>>([]);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: any[]) => {
    if (fileRejections.length > 0) {
      const rejection = fileRejections[0];
      if (rejection.errors[0].code === "file-invalid-type") {
        setError("Invalid file type. Please upload a .jpg, .jpeg, .png, or .webp file.");
      } else if (rejection.errors[0].code === "file-too-large") {
        setError("File size exceeds the 10MB limit.");
      }
      return;
    }

    setError(null);

    setFiles(
      acceptedFiles.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file), 
      }))
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
    maxSize: 10 * 1024 * 1024,
  });

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const handleRemove = (index: number) => {
    const newFiles = [...files];
    URL.revokeObjectURL(newFiles[index].preview); 
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 bg-gray-50 p-6 rounded-lg cursor-pointer text-center hover:border-gray-500"
      >
        <input {...getInputProps()} />
        <p className="text-gray-500">
          <span className="text-gray-700 font-semibold">Click to choose a file</span> or drag here
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Accepts .jpg, .jpeg, .png, .webp files <br />
          <span className="text-gray-600">Size limit: 10 MB</span>
        </p>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}

      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {files.map((file, index) => (
            <div key={file.name} className="relative w-full">
              <img
                src={file.preview}
                alt="Preview"
                className="rounded-lg w-full h-24 object-cover border"
              />
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                aria-label="Remove file"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;