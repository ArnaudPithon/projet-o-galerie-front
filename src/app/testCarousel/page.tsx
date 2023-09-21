import TestCarousel from "../components/testCarousel/TestCarousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-9/12">
        <TestCarousel />
      </div>
    </main>
  )
}