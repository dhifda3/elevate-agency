import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const projects = [
  {
    id: 1,
    title: 'Luxury Interiors Agency',
    description: 'A clean, modern website designed to position this agency as a market leader and attract high-value clients.',
    image: portfolio1,
    category: 'Website Design',
  },
  {
    id: 2,
    title: 'Premium Brand Identity',
    description: 'Complete brand identity that communicates trust and sophistication, helping the client win enterprise contracts.',
    image: portfolio2,
    category: 'Branding',
  },
  {
    id: 3,
    title: 'Fashion E-Commerce Platform',
    description: 'An elegant online store that increased conversion rates and positioned the brand as a luxury destination.',
    image: portfolio3,
    category: 'E-Commerce',
  },
  {
    id: 4,
    title: 'Financial Consulting Firm',
    description: 'A professional web presence that establishes credibility and generates qualified leads from high-net-worth clients.',
    image: portfolio4,
    category: 'Website Design',
  },
];

export default function Portfolio() {
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
                Our Work
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A selection of projects that showcase our commitment to quality and our ability to create websites that truly elevate brands.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-secondary mb-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="max-w-2xl">
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-medium text-foreground mt-2 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.article>
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
                Ready to elevate your brand?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let's discuss how we can create something exceptional for your agency.
              </p>
              <Link to="/#contact">
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                >
                  Start a project
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
