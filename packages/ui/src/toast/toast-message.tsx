import { toast, Toast } from "react-hot-toast";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import cn from "utils/src/cn";

interface Params {
  message: React.ReactNode;
  options?: Partial<
    Pick<
      Toast,
      "id" | "className" | "icon" | "style" | "duration" | "position"
    > & {
      variant: "light" | "dark" | undefined; // Variant decides the colors
      type: "success" | "error" | undefined; // Type decides the icon
    }
  >;
}

const toastMessage = (
  message: Params["message"],
  { variant, type, ...options }: Params["options"] = {
    variant: "light",
  }
) => {
  toast.custom(
    (t) => {
      let icon = null;

      if (type === "success") {
        icon = <MdCheckCircle className="h-5 w-5" />;
      } else if (type === "error") {
        icon = <MdCancel className="h-5 w-5" />;
      }

      if (t.icon) {
        icon = t.icon;
      }

      return (
        <div
          className={cn(
            "flex gap-x-1.5 items-start transform rounded-md px-3 py-2 text-sm transition-all border",
            variant === "dark" && "bg-theme-dark text-white",
            variant === "light" && "bg-white text-theme-dark",
            t.visible
              ? "animate-slide-in-left"
              : "animate-slide-out-right translate-x-[200%]",
            t.className
          )}
          style={t.style}
        >
          {icon && <div>{icon}</div>}
          <div>{message}</div>
        </div>
      );
    },
    {
      position: "bottom-right",
      ...options,
    }
  );
};

export default toastMessage;
