export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="content-page-shell">{children}</div>;
}
