import Image from "next/image";
import logo from "../../assets/logo.svg";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";
import { IconButton } from "@/components/icon-button";

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={180.5} height={30} />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição Confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>
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
          <div className="grid gap-3 md:grid-cols-3">
            <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rouded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-sm text-gray-300 leading-none tet-center">
                Acessos ao link
              </span>
            </div>

            <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rouded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                785
              </span>
              <span className="text-sm text-gray-300 leading-none tet-center">
                Inscrições Feitas
              </span>
            </div>

            <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rouded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                3º
              </span>
              <span className="text-sm text-gray-300 leading-none tet-center">
                Posição no ranking
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
