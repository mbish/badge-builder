## Badge Builder
This is a very simple module for including a badge builder. You must set a `ROOT_URL` for this module to function correctly. When you "Publish Badge" a call is issued to "createBadge" which is passed the json data of the badge created in the following format


```
{
    name: "badge-name",
    image: "base64-encoded image data",
    email: "origin email",
    origin: "creating the badge",
    ...
}
```
