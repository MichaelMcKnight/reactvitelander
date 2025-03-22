import Container from "./custom/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "@/data/data";

const FAQ = () => {
  const { heading, content, faqs } = FAQData();
  return (
    <section id="faq" className="py-12 bg-zinc-800 text-white">
      <Container className="py-12 grid md:grid-cols-5 gap-4 md:gap-32">
        <div className="md:col-span-2">
          <h2>{heading}</h2>
          {content}
        </div>
        <div className="md:col-span-3">
          {faqs.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl aria-expanded:text-rose-500 border-b-[1px] border-zinc-600 rounded-none">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
