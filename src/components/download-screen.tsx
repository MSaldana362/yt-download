import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function DownloadScreen() {
  return (
    <div>
      <div className="p-10">
        <AlbumForm />
        <Button>Submit</Button>
      </div>
    </div>
  );
}

function AlbumForm() {
  const labelClass = "grid col-span-1";
  const inputClass = "grid col-span-3";
  const fieldClass = "grid grid-cols-4 items-center justify-center";
  return (
    <div className="grid grid-cols-1 space-y-4">
      <div className={fieldClass}>
        <Label htmlFor="url" className={labelClass}>
          URL
        </Label>
        <Input
          id="url"
          placeholder="Enter Playlist URL"
          className={inputClass}
        />
      </div>

      <div className={fieldClass}>
        <Label htmlFor="artist" className={labelClass}>
          Artist
        </Label>
        <Input
          id="artist"
          placeholder="Enter Artist Name"
          className={inputClass}
        />
      </div>

      <div className={fieldClass}>
        <Label htmlFor="album" className={labelClass}>
          Album
        </Label>
        <Input
          id="album"
          placeholder="Enter Album Name"
          className={inputClass}
        />
      </div>

      <div className={fieldClass}>
        <Label htmlFor="year" className={labelClass}>
          Year
        </Label>
        <Input
          id="year"
          placeholder="Enter Album Year"
          className={inputClass}
        />
      </div>
    </div>
  );
}
