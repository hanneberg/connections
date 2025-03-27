import React from "react";
import { MAX_MISTAKES } from "../../../lib/constants";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import BaseModal from "../BaseModal";

function InfoModal() {
  return (
    <BaseModal
      title=""
      trigger={<Info className="mr-4" />}
      initiallyOpen={false}
      actionButtonText="Skjønner!"
    >
      <Tabs defaultValue="how-to-play">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="how-to-play">Hvordan spille</TabsTrigger>
          <TabsTrigger value="about-us">Om</TabsTrigger>
        </TabsList>
        <TabsContent value="how-to-play">
          {" "}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Hva er meningen?</AccordionTrigger>
              <AccordionContent>
                Gruppér ord eller navn som har noe til felles
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Hvordan spiller jeg?</AccordionTrigger>
              <AccordionContent>
                Velg orda og trykk "send inn" for å se om dine gjett passer til
                en av kategoriene.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Hvor mange forsøk får jeg?</AccordionTrigger>
              <AccordionContent>
                {`Du kan ha ${MAX_MISTAKES} feil før spillet ender.`}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="about-us">
          {" "}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Hvem er Hanne?</AccordionTrigger>
              <AccordionContent>
                Det er meg. {" "}
                <a
                  href="mailto:hanneberg0@gmail.com"
                  target="_blank"
                  className="underline font-bold"
                >
                  Send mail om du har inspill
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Har du lagd alt dette?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-1">Nei</p>
                <ul className="list-disc">
                  <li>
                    Andcomputers har skrevet koden, jeg har bare gjort småjusteringer  {" "}
                  <a
                    href="https://github.com/and-computers/react-connections-game"
                    target="_blank"
                    className="underline font-bold"
                  >
                    Sjekk de ut her
                  </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </TabsContent>
      </Tabs>
    </BaseModal>
  );
}

export default InfoModal;
