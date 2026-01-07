import type { LoaderFunctionArgs } from "react-router";

export async function loader({ params }: LoaderFunctionArgs) {
  const res = await fetch(
    import.meta.env.VITE_API + "/kaban-trello/api/" + params.id
  );
  return await res.json();
}
