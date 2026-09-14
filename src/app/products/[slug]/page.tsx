import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ShieldCheck, Pill, Package, Thermometer, Layers, 
  ArrowRight, FileText, CheckCircle2, MessageSquare, PhoneCall,
  CheckCircle, Sparkles, Building2
} from 'lucide-react';
import { products } from '@/data/products';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { ProductCard } from '@/components/common/ProductCard';
import { ContactForm } from '@/components/common/ContactForm';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} (${product.genericName}) | Formulations`,
    description: `${product.name}: ${product.composition}. Dosage Form: ${product.dosageForm}. Sourced exclusively through WHO-GMP certified manufacturing partners by Opsus Pharmaceuticals.`,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3]">
      {/* Top Breadcrumb & Title Bar */}
      <div className="bg-white border-b border-[#E4E0D8] py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: product.category, href: `/products?category=${product.categorySlug}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Main Product Presentation */}
      <section className="py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Header (Visible only on < lg screens so user immediately identifies product) */}
          <div className="lg:hidden mb-6">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-[#E4E0D8] text-[#2F6FA8]">
                {product.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#C9A15E]/15 text-[#0A1B33] flex items-center gap-1">
                <Pill className="w-2.5 h-2.5 text-[#C9A15E]" />
                {product.dosageForm}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <CheckCircle className="w-2.5 h-2.5" />
                WHO-GMP
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1B33] tracking-tight">
              {product.name}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[#2F6FA8] font-semibold mt-1">
              {product.composition}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Visual Column: Packaging (Static on mobile, sticky only on desktop lg) */}
            <div className="lg:col-span-5 static lg:sticky lg:top-28">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[#E4E0D8] shadow-sm">
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF8F3] border border-[#E4E0D8]/60 mb-5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-[#0A1B33]/90 text-white backdrop-blur-md">
                      <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A15E]" />
                      WHO-GMP Certified Partner
                    </span>
                  </div>
                </div>

                {/* Sourcing Transparency Box */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8] text-xs text-[#5B6B7D] space-y-1.5">
                  <div className="font-semibold text-[#0A1B33] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6FA8]" />
                    <span>Sourcing & Quality Guarantee</span>
                  </div>
                  <p className="leading-relaxed text-[11px] sm:text-xs">
                    Formulated under contract exclusively at accredited WHO-GMP certified partner facilities. Released after full Certificate of Analysis (CoA) batch testing.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 pt-5 border-t border-[#E4E0D8] flex flex-col gap-2.5">
                  <Button
                    href={`/contact?interest=Product+Enquiry&product=${encodeURIComponent(product.name)}`}
                    variant="primary"
                    size="md"
                    showArrow
                    className="w-full justify-center text-xs sm:text-sm py-2.5"
                  >
                    Enquire About Availability
                  </Button>
                  <Button
                    href="/pcd-franchise"
                    variant="secondary"
                    size="md"
                    className="w-full justify-center text-xs sm:text-sm py-2.5"
                  >
                    Apply for Territory Monopoly
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Column: Specifications & Clinical Data (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Desktop Header (Visible only on lg+ screens) */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E4E0D8] text-[#2F6FA8]">
                    {product.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C9A15E]/15 text-[#0A1B33] flex items-center gap-1">
                    <Pill className="w-3.5 h-3.5 text-[#C9A15E]" />
                    {product.dosageForm}
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1B33] tracking-tight">
                  {product.name}
                </h1>
                <p className="font-mono text-sm sm:text-base text-[#2F6FA8] font-semibold mt-2">
                  {product.composition}
                </p>
                <p className="text-xs text-[#5B6B7D] mt-1">
                  Generic Designation: <strong>{product.genericName}</strong>
                </p>
              </div>

              {/* Product Overview */}
              <div className="bg-white rounded-2xl p-5 sm:p-8 border border-[#E4E0D8] shadow-sm">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1B33] mb-2.5 flex items-center gap-2">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F6FA8]" />
                  Product Description
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#5B6B7D] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Clinical Indication Scope */}
              <div className="bg-white rounded-2xl p-5 sm:p-8 border border-[#E4E0D8] shadow-sm">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1B33] mb-2.5 flex items-center gap-2">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F6FA8]" />
                  Indications & Clinical Guidance
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7D] leading-relaxed mb-4">
                  {product.therapeuticUse}
                </p>
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong>Prescription Notice:</strong> To be dispensed only by or on the prescription of a Registered Medical Practitioner (RMP). Not for direct consumer self-medication.
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-white rounded-2xl p-5 sm:p-8 border border-[#E4E0D8] shadow-sm">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1B33] mb-3">
                  Packaging & Storage Specifications
                </h3>
                <div className="divide-y divide-[#E4E0D8] text-xs sm:text-sm">
                  <div className="py-2.5 sm:py-3 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Packaging Presentation:</span>
                    <span className="font-semibold text-[#0A1B33] text-right">{product.packaging}</span>
                  </div>
                  <div className="py-2.5 sm:py-3 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Supply Format:</span>
                    <span className="font-medium text-[#0A1B33] text-right max-w-sm">{product.howSupplied}</span>
                  </div>
                  <div className="py-2.5 sm:py-3 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Recommended Storage:</span>
                    <span className="font-medium text-[#0A1B33] text-right max-w-sm">{product.storage}</span>
                  </div>
                  <div className="py-2.5 sm:py-3 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Manufacturing Source:</span>
                    <span className="font-semibold text-[#2F6FA8] text-right">WHO-GMP Certified Partner Facility</span>
                  </div>
                  <div className="py-2.5 sm:py-3 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Marketing & Distribution:</span>
                    <span className="font-semibold text-[#0A1B33] text-right">Opsus Pharmaceuticals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Showcase - 3 boxes in single row */}
      {relatedProducts.length > 0 && (
        <section className="py-12 sm:py-16 bg-white border-t border-[#E4E0D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#2F6FA8]">
                  Same Therapeutic Area
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1B33]">
                  Related {product.category} Formulations
                </h3>
              </div>
              <Link
                href={`/therapeutic-areas/${product.categorySlug}`}
                className="text-xs font-semibold text-[#2F6FA8] hover:text-[#0A1B33] inline-flex items-center gap-1"
              >
                <span>View Segment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pre-filled Product Enquiry Form */}
      <section className="py-12 sm:py-16 bg-[#FAF8F3] border-t border-[#E4E0D8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            defaultInterest="Product Enquiry"
            defaultMessage={`Hello Opsus Team, I would like to enquire about availability, minimum order quantity, and pricing for ${product.name} (${product.composition}).`}
          />
        </div>
      </section>
    </div>
  );
}
