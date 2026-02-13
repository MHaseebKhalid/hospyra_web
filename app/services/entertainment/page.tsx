import type { Metadata } from "next";
import EntertainmentBanner from '@/components/banners/EntertainmentBanner'

export const metadata: Metadata = {
  title: "Entertainment Services - Hospyra",
  description: "Entertainment solutions to enhance your restaurant experience. Create memorable experiences for your guests through live music, events, and entertainment programming.",
  keywords: "restaurant entertainment, live music, restaurant events, entertainment programming, restaurant experience",
};

const EntertainmentPage = () => {
  return (
    <>
      <EntertainmentBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Entertainment</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Entertainment solutions to enhance your restaurant experience.
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="text-foreground">
              Our entertainment services help you create memorable experiences for your guests 
              through live music, events, and entertainment programming.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default EntertainmentPage

