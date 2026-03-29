"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { archetypes } from "@/lib/archetypes";

function resizeImage(file: File, maxSize: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxSize || height > maxSize) {
          if (width > height) {
            height = (height / width) * maxSize;
            width = maxSize;
          } else {
            width = (width / height) * maxSize;
            height = maxSize;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas not supported"));
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function UploadPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    try {
      const dataUrl = await resizeImage(file, 800);
      setPreview(dataUrl);
    } catch {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const analyze = useCallback(() => {
    if (!preview || processing) return;
    setProcessing(true);
    try {
      sessionStorage.setItem("mogmaxxme-photo", preview);
    } catch {
      // sessionStorage unavailable — continue without photo
    }
    const index = Math.floor(Math.random() * archetypes.length);
    router.push(`/results?a=${index}`);
  }, [preview, processing, router]);

  return (
    <main className="min-h-screen flex flex-col px-6 py-8">
      <div className="mb-12">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to home
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-xl mx-auto w-full">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2 text-center">
          Upload your photo
        </h1>
        <p className="text-muted-foreground mb-10 text-center">
          Gym selfie, mirror pic, whatever you&apos;ve got. We&apos;ll handle the rest.
        </p>

        {/* Drop zone */}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={`w-full rounded-xl border-2 border-dashed transition-colors duration-200 cursor-pointer flex flex-col items-center justify-center min-h-[240px] ${
            dragging
              ? "border-foreground bg-muted"
              : preview
              ? "border-border bg-card"
              : "border-border hover:border-foreground/40 bg-card"
          }`}
        >
          {preview ? (
            <div className="p-4 flex flex-col items-center gap-3">
              <img
                src={preview}
                alt="Preview"
                className="max-h-64 max-w-full object-contain rounded-lg"
              />
              <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                {fileName}
              </p>
              <p className="text-xs text-muted-foreground">
                Click to change photo
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 p-8">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted-foreground"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p className="text-foreground font-medium">
                Drop your photo here or click to browse
              </p>
              <p className="text-sm text-muted-foreground">
                JPG, PNG, WebP up to 10MB
              </p>
            </div>
          )}
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={onFileChange}
          className="hidden"
        />

        {/* Analyze button */}
        <button
          onClick={analyze}
          disabled={!preview || processing}
          className={`mt-8 w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-[0.98] ${
            preview && !processing
              ? "bg-foreground text-background hover:opacity-90 cursor-pointer"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          {processing ? "Analyzing..." : "Analyze my physique"}
        </button>
      </div>
    </main>
  );
}
