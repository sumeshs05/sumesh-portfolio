import { logoutAction } from "@/app/actions";

export default function AdminBar() {
  return (
    <div className="sticky top-0 z-[60] flex items-center justify-center gap-3 bg-primary px-4 py-2 text-center text-on-primary">
      <span className="admin-chip">
        Edit mode — click any text to change it, or use the + / × buttons on lists.
      </span>
      <form action={logoutAction}>
        <button
          type="submit"
          className="admin-chip rounded-full bg-on-primary/10 px-3 py-1 hover:bg-on-primary/20"
        >
          Exit edit mode
        </button>
      </form>
    </div>
  );
}
