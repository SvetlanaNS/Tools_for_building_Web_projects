import ("./styles.scss")

import {drawGalleryItem} from './item'
import items from './items'

const galleryRootElement = document.getElementById('galleryId')

console.log(items)

items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)))
