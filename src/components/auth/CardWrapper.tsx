"use client";

import CardTitle from "./CardTitle";

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import SocialMediaLinks from "./SocialMediaLinks";
import BackButton from "./BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocials?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocials,
}: CardWrapperProps) => {
  return (
    <>
      <Card className='w-[400px] shadow-md'>
        <CardHeader>
          <CardTitle label={headerLabel} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showSocials && (
          <CardFooter>
            <SocialMediaLinks />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </Card>
    </>
  );
};

export default CardWrapper;
