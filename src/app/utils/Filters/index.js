import {
  FunnelIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const filterOptions = [
  { value: "contenido", label: "Contenido", Icon: DocumentTextIcon },
  { value: "autor", label: "Autor", Icon: UserIcon },
  { value: "titulo", label: "Título", Icon: DocumentTextIcon },
];

export const filterBlogEntries = (entry, filter, query) => {
  query = query.toLowerCase();
  switch (filter) {
    case "content":
      return entry.content_blog_entries.toLowerCase().includes(query);
    case "titulo":
      return entry.title_blog_entries.toLowerCase().includes(query);
    case "autor":
      return entry.name_user.toLowerCase().includes(query);
    default:
      return true;
  }
};