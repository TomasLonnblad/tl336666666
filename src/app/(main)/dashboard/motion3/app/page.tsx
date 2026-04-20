

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Page() {
  return (
    <div className="flex items-center space-x-2">
          <a href="https://tomaslonnblad.github.io/tleeee">
        
      <Switch id="airplane-mode" /> </a>
   

      <Label htmlFor="airplane-mode"> <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">  3D Mode </Badge> </Label>
        <Label htmlFor="terms">

          </Label>
      <AspectRatio ratio={0/0 } className="bg-muted rounded-lg">
        
        <img
          src="https://tomaslonnblad.github.io/2.jpg"
          alt="Img"
      
          className="rounded-lg object-cover "
        />
      </AspectRatio>



    </div>
  )
}




     
     
