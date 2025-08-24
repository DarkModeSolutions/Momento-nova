import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar defaultChecked={false}>
      <SidebarContent />
    </Sidebar>
  );
}
