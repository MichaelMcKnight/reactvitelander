import Container from "@/components/custom/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "@/data/data";
import FadeIn from "@/components/animation/FadeIn";
import { motion } from "framer-motion";

const FAQ = () => {
  const { heading, content, faqs } = FAQData();
  return (
    <section id="faq" className="py-12 bg-zinc-800 text-white">
      <Container className="py-12 grid lg:grid-cols-5 gap-4 lg:gap-32">
        <FadeIn direction="left" className="lg:col-span-2">
          <h2>{heading}</h2>
          {content}
        </FadeIn>
        <div className="lg:col-span-3">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl aria-expanded:text-rose-500 border-b-[1px] border-zinc-600 rounded-none">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-loose">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
