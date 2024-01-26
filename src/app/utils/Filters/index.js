import {
  FunnelIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const filterOptions = [
  { value: "all", label: "Todos", Icon: FunnelIcon },
  { value: "contenido", label: "Contenido", Icon: DocumentTextIcon },
  { value: "autor", label: "Autor", Icon: UserIcon },
  { value: "titulo", label: "Título", Icon: DocumentTextIcon },
];
