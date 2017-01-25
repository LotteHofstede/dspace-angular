export const BITSTREAMS = [
    {
        "id": "43c57c2b-206f-4645-8c8f-5f10c84b09fa",
        "type": "bitstream",
        "attributes": {
            "name": "img.png",
            "size": "1500",
            "url": "bitstreams/img.png",
            "mimetype": "image/png",
            "description": "This is a test item"
        },
        "relationships": {
            "bundle": {
                "data": [
                    { "type": "bundles", "id": "35e0606d-5e18-4f9c-aa61-74fc751cc3f9" }
                ]
            },
            "metadata": {
                "data": []
            }
        }
    },
    {
        "id": "1a013ecc-fb25-4689-a44f-f1383ad26632",
        "type": "bitstream",
        "attributes": {
            "name": "other-img.png",
            "size": "2000",
            "url": "bitstreams/other-img.png",
            "mimetype": "image/png",
            "description": "This is a test item"

        },
        "relationships": {
            "bundle": {
                "data": [
                    { "type": "bundles", "id": "a469c57a-abcf-45c3-83e4-b187ebd708fd" }
                ]
            },
            "metadata": {
                "data": []
            }
        }
    }
];
