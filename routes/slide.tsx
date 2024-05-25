import {type PageProps} from '$fresh/server.ts'
import Slide from "../islands/Slide.tsx";
import {DBSlide} from "../types/slide.ts";
import {Handlers} from '$fresh/server.ts'

export const handler: Handlers<DBSlide[]> = {
    async GET(req, ctx) {
        const url = new URL(req.url)
        const res = await fetch(`${url.protocol}//${url.host}/api/slides`).catch(() => undefined)
        const slides = await res?.json() as DBSlide[] || []

        return ctx.render(slides)
    },
}

export default function SliderPage(props: PageProps<DBSlide[]>) {
    return <Slide slides={props.data}/>;
}
