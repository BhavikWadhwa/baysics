"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { resetDemoStorage } from "../../lib/storage";

export function DemoDock() {
  return <aside className="demo-dock" aria-label="Prototype view controls">
    <span className="eyebrow" style={{padding:"0 7px",opacity:.55}}>Demo</span>
    <Link href="/">Marketing Website</Link><Link href="/employee">Employee Demo</Link><Link href="/manager">Manager Demo</Link>
    <button onClick={() => { resetDemoStorage(); window.location.reload(); }} aria-label="Reset all demo data"><RotateCcw size={14}/> Reset</button>
  </aside>;
}
