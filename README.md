[![Docker Build & Publish](https://github.com/InTerestedOWL/NEXTJS_Christian-Dechant/actions/workflows/pipeline.yml/badge.svg)](https://github.com/InTerestedOWL/NEXTJS_Christian-Dechant/actions/workflows/pipeline.yml)
[![Github Integration with Deployment to the Server](https://github.com/InTerestedOWL/YAML_Infrastructure/actions/workflows/pipeline.yml/badge.svg?branch=main)](https://github.com/InTerestedOWL/YAML_Infrastructure/actions/workflows/pipeline.yml)

## Hello and Welcome

I am InterestedOWL and this is my NEXTJS Homepage. Showing you all the informations you need to know about me :D.

### How does this page is build

This page is build via Docker. Therefore you will find a Dockerfile inside of the root of the repository.
It is copied from the official nextjs
documentation: [NextJS Documentation]( https://nextjs.org/docs/app/building-your-application/deploying#docker-image)

These build steps are done via github actions.
Github actions are so configured, that they first build the image, publish it to the docker hub and then triggering
another repository (YAML_Infrastructure) github action.
Which then connects to my server and applying all the fancy shit to it.

### Image tags

Image tags are delivered with the actual commit sha and the latest tag. That way I could use the sha for my
configuration in the YAML_Infrastructure project and keep overwriting the needed .env informations.

# Have fun looking at my page!

You find my page here: [[Christian Dechant | Homepage](https://christiandechant.de)]

Cheers: Christian