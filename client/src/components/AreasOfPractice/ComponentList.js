import React from 'react'
import WellnessAndPreventativeCare from './areas/WellnessAndPreventativeCare'
import Pediatrics from './areas/Pediatrics'
import AdultMedicine from './areas/AdultMedicine'
import Diabetes from './areas/Diabetes'
import Cardiac from './areas/Cardiac'
import WeightLoss from './areas/WeightLoss'
import WomensHealth from './areas/WomensHealth'
import Geriatrics from './areas/Geriatrics'
import PrevMeds from './areas/PrevMeds'
import SkinCare from './areas/SkinCare'
import AltMeds from './areas/AltMeds'

export default [
    {
        title: "Wellness & Preventative Care",
        component:<WellnessAndPreventativeCare />
    },
    {
        title: "Pediatrics",
        component:<Pediatrics />
    },
    {
        title: "Adult Medicine",
        component:<AdultMedicine />
    },
    {
        title: "Diabetic Care",
        component:<Diabetes />
    },
    {
        title: "Cardiac Care",
        component:<Cardiac />
    },
    {
        title: "Weight Loss Management",
        component:<WeightLoss />
    },
    {
        title: "Women's Health",
        component:<WomensHealth />
    },
    {
        title: "Geriatrics",
        component:<Geriatrics />
    },
    {
        title: "Preventative Medicine",
        component:<PrevMeds />
    },
    {
        title: "Skin Care",
        component:<SkinCare />
    },
    {
        title: "Alternative Medicine",
        component:<AltMeds />
    }
]