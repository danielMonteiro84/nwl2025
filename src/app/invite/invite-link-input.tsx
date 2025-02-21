import { InputField, InputIcon, InputRoot } from "@/components/input";
import { IconButton } from "@/components/icon-button";
import { Copy, Link } from "lucide-react";

export default function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue="http://localhost:300/invite/351684asdf65"
      />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
