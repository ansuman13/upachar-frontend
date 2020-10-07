
const initialState = {
    top5Products :[
        {
            "id": 221,
            "name": "A Popular Hand Sanitizer with Lemon Fragrance",
            "manufacturer": "Popular Products",
            "min_price": 350,
            "UOM": "Piece",
            "category": 5,
            "discount_percentage": null,
            "tags": [
                {
                    "name": "Hand Sanitizer"
                },
                {
                    "name": "Sanitizer"
                }
            ],
            "thumbnails": [
                "/media/product/images/Popular_Hand_Sanitizer.jpg"
            ],
            "hit_count": 14195
        },
        {
            "id": 212,
            "name": "Acneguard Face Wash",
            "manufacturer": "Psychotropics India Ltd",
            "min_price": 285,
            "UOM": "Piece",
            "category": 5,
            "discount_percentage": null,
            "tags": [
                {
                    "name": "Face Wash"
                }
            ],
            "thumbnails": [
                "/media/product/images/Acneguard.jpg"
            ],
            "hit_count": 150
        },
        {
            "id": 232,
            "name": "Pampers Pants Diapers S Size",
            "manufacturer": "Pampers",
            "min_price": 1918,
            "UOM": "packet",
            "category": 4,
            "discount_percentage": null,
            "tags": [
                {
                    "name": "Diapers"
                },
                {
                    "name": "Baby Care"
                },
                {
                    "name": "Diaper"
                },
                {
                    "name": "Pampers"
                }
            ],
            "thumbnails": [
                "/media/product/images/Pampers_S_74.jpg"
            ],
            "hit_count": 196
        },
        {
            "id": 296,
            "name": "Surgical Paper Mask",
            "manufacturer": "General",
            "min_price": 1000,
            "UOM": "Piece",
            "category": 5,
            "discount_percentage": null,
            "tags": [
                {
                    "name": "Mask"
                }
            ],
            "thumbnails": [
                "/media/product/images/61bu1ugqPL._AC_SX425_.jpg"
            ],
            "hit_count": 1783
        },
        {
            "id": 226,
            "name": "KN95 Mask",
            "manufacturer": "Mediblessings",
            "min_price": 400,
            "UOM": "Piece",
            "category": 5,
            "discount_percentage": null,
            "tags": [
                {
                    "name": "Mask"
                },
                {
                    "name": "Masks"
                }
            ],
            "thumbnails": [
                "/media/product/images/KN95_Masks.jpg"
            ],
            "hit_count": 373
        }
    ]
}

const topProductsReducer = (state = initialState, action) => {
    return state
}

export default topProductsReducer