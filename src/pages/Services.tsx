import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Website Design & Development',
    description: 'We create stunning, high-performance websites that capture your brand essence and convert visitors into clients. Every detail is carefully crafted to reflect your agency\'s unique value.',
    features: [
      'Custom design tailored to your brand',
      'Mobile-responsive and fast-loading',
      'Built to convert visitors into leads',
      'Easy content management',
    ],
  },
  {
    title: 'Brand Strategy & Identity',
    description: 'Your brand is more than a logo. We help you develop a cohesive visual identity and messaging strategy that positions you as a leader in your market.',
    features: [
      'Brand positioning and messaging',
      'Logo and visual identity design',
      'Brand guidelines and assets',
      'Consistent brand experience',
    ],
  },
  {
    title: 'Ongoing Support & Growth',
    description: 'We don\'t just build and leave. We partner with you for the long term, ensuring your website continues to perform and evolve with your business.',
    features: [
      'Regular performance monitoring',
      'Content updates and improvements',
      'Strategic guidance and consulting',
      'Priority support when you need it',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, and audience to understand exactly what you need.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We develop a clear plan that aligns your website with your business objectives.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'We create beautiful, intentional designs that reflect your brand and engage your audience.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'We bring everything together and launch your new website to the world.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
                How We Help
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We partner with agencies to create premium digital experiences that attract better clients, increase conversions, and establish market leadership.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 mr-4 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven approach to delivering exceptional results, every time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <span className="text-4xl md:text-5xl font-light text-gray-300 mb-4 block">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                Let's work together
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Ready to take your agency to the next level? Get in touch and let's discuss your project.
              </p>
              <Link to="/#contact">
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                >
                  Book a consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
