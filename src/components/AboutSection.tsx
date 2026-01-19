import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-8">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We're a small team of creative professionals passionate about helping agencies stand out in a crowded market. We believe that great design isn't just about aesthetics—it's about creating experiences that connect with your audience and drive results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            {[
              {
                title: 'Quality First',
                description: 'Every project receives our full attention. We never cut corners and always deliver work we\'re proud of.',
              },
              {
                title: 'Client Partnership',
                description: 'We work closely with you to understand your goals and vision, ensuring the final result exceeds expectations.',
              },
              {
                title: 'Results Driven',
                description: 'Beautiful design is just the beginning. We focus on creating websites that convert visitors into clients.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <h3 className="text-xl font-medium text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
