"use client";
import type { Changelog } from "contentlayer/generated";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { MarketingButton as Button } from "@dub/ui/src/button-marketing";

export function Pagination({
  prev,
  next,
}: {
  prev?: Changelog;
  next?: Changelog;
}) {
  return (
    <div className="mx-auto flex w-full max-w-prose items-center justify-between">
      <div />
      {/* {prev ? (
        <div className="w-1/2 flex-1 text-left">
          <Button asChild variant="link">
            <Link href={`/changelog/${prev.slug}`} className="group">
              <ChevronLeft className="text-muted-foreground group-hover:text-foreground mr-2 h-4 w-4" />
              <span className="truncate">{prev.title}</span>
            </Link>
          </Button>
        </div>
      ) : (
        <div />
      )} */}
      {next ? (
        <div className="w-1/2 flex-1 text-right">
          <Button asChild variant="link">
            <Link href={`/changelog/${next.slug}`} className="group">
              <span className="truncate">{next.title}</span>
              <ChevronRight className="text-muted-foreground group-hover:text-foreground ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
