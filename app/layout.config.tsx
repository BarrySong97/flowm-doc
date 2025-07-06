import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "@/lib/i18n";

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title:
        locale === "cn" ? (
          <div className="flex items-center gap-2">
            <img
              src={"/logo/logo.png"}
              style={{
                width: "32px",
                height: "34px",
              }}
            />
            <span>流记</span>
          </div>
        ) : (
          "English Docs"
        ),
      url: `/${locale}`,
    },
    githubUrl: "https://github.com",
    links: [
      {
        type: "main",
        text: locale === "cn" ? "文檔" : "Documentation",
        url: `/${locale}/docs`,
      },
    ],
  };
}
