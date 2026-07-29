export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="content-page-shell blog-page">{children}</div>;
}
