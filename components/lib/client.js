import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId:'',
    dataset:'',
    apiVersion:'',
    useCdn:true,
    token:''
})