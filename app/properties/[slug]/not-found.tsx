import Link from "next/link";
import { HouseLine } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function PropertyNotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center bg-background">
        <div className="mx-auto max-w-md px-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-muted">
            <HouseLine size={40} weight="duotone" className="text-amber" />
          </div>
          <h1 className="mt-6 font-heading text-3xl font-extrabold text-foreground">
            Property Not Found
          </h1>
          <p className="mt-3 text-muted-foreground">
            The property you&apos;re looking for doesn&apos;t exist or may have
            been removed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link href="/properties">Browse Properties</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
