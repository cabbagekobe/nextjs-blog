import React from 'react'
import { Site } from "@/site.config";

const Footer = (): JSX.Element => (
  <footer className="container max-w-3xl mx-auto mt-auto px-4 py-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <p className="text-center">
      <a href="https://twitter.com/cabbagekobe">
        &copy;{Site.title}
      </a>
    </p>
  </footer>
)

export default Footer
