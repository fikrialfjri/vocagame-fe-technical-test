import Image from "next/image";

const Avatar = ({
  width,
  height,
  avatarClasses,
  children,
  description,
  name,
}) => {
  return (
    <div className={children ? "flex items-center gap-3" : ""}>
      <Image
        src={`https://ui-avatars.com/api/?name=${name || "AA"}`}
        alt="Profile Picture"
        width={width ?? 64 - 24}
        height={height ?? 64 - 24}
        sizes={width == 0 && height == 0 ? "100vw" : ""}
        className={`rounded-full ${avatarClasses} ${
          children && "border-4 border-white"
        }`}
      />
      {children && (
        <div className="space-y-0.5 mt-6">
          <p className="text-2xl font-extrabold m-0">{children}</p>
          {description && <p className="text-sm">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default Avatar;
