import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

const client = SanityClient({
    projectId: '2zg2xk6v',
    dataset: 'production',
    apiVersion: '',
    useCdn: true,
    token: 'skZhYmT40O0Q6xjGOE9bcSJCYijasryZ8esM7u4maQMMZhdThvrWS8NeuBSKevcVVD9BtlP28Z1ttUCxd76ZyhKC0Uedblj524WQ5S6l4sNb22b63pNFGIUmND3YzvL8AN1ioaz0WPaDvnTJg8nCB8U5WiJrw7eupDZRTdgNulmcH1Yr1H2p'
})