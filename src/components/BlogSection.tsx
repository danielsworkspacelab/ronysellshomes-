import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { ArrowRight, Clock, Calendar, X, Share2, CheckCircle2, Bookmark, Check } from 'lucide-react';

interface BlogSectionProps {
  onOpenConnectModal: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenConnectModal }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const categories = ['All', 'New Construction', 'First-Time Buyers', 'Closing Process', 'Florida Living', 'Design & Living'];

  const filteredPosts = filterCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === filterCategory);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="tips" className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E9DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A99A87] mb-3">
              Home Buying Education
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#292925] tracking-tight leading-[1.15] mb-4 [text-wrap:balance]">
              Helpful Insights for Your <br />
              <span className="italic font-light text-[#493B32]">Home-Buying Journey.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#493B32]/85 font-light leading-relaxed">
              Practical guides, educational checklists, and essential milestones designed to empower Florida homebuyers with clarity and confidence.
            </p>
          </div>

          {/* Category Filter Controls (Clean interactive buttons, zero-pill) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#E9DFD0]/50 border border-[#D5C2A5] self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-[#493B32] text-[#FAF8F4] shadow-xs'
                    : 'text-[#493B32] hover:text-[#292925] hover:bg-[#FAF8F4]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-[#FAF8F4] border border-[#E9DFD0] hover:border-[#D5C2A5] flex flex-col justify-between transition-all duration-300 hover:shadow-sm"
            >
              <div>
                {/* Thumbnail Image */}
                <div
                  onClick={() => setSelectedPost(post)}
                  className="relative aspect-[16/10] overflow-hidden bg-[#E9DFD0] cursor-pointer"
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF8F4]/90 backdrop-blur-xs text-[#292925] text-[11px] font-medium px-2 py-0.5">
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  {/* Clean unboxed metadata with · separator (Zero-Pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-[#A99A87] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#B69A70]" />
                      <span>{post.publicationDate}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B69A70]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedPost(post)}
                    className="text-lg font-serif text-[#292925] group-hover:text-[#493B32] transition-colors leading-snug mb-3 cursor-pointer tracking-tight"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#493B32]/85 leading-relaxed line-clamp-3">
                    {post.shortDescription}
                  </p>
                </div>
              </div>

              {/* Bottom Read More Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="w-full pt-3 border-t border-[#E9DFD0] flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#493B32] group-hover:text-[#292925] cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Educational Disclaimer */}
        <div className="mt-16 p-4 bg-[#E9DFD0]/30 border border-[#D5C2A5] text-xs text-[#493B32] text-center">
          Educational Notice: Articles are provided for general educational awareness. Publication dates and content can be tailored. They do not constitute formal mortgage, tax, financial, or legal advice.
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-[#FAF8F4] border border-[#D5C2A5] max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
            
            {/* Modal Header Bar */}
            <div className="sticky top-0 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#E9DFD0] px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 text-xs font-medium text-[#A99A87]">
                <span>{selectedPost.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs border border-[#D5C2A5] text-[#493B32] hover:bg-[#E9DFD0] cursor-pointer transition-colors"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 text-[#493B32] hover:text-[#292925] cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10">
              {/* Header Image */}
              <div className="aspect-[16/8] overflow-hidden mb-8 border border-[#E9DFD0]">
                <img
                  src={selectedPost.thumbnail}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div className="mb-8">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#B69A70] mb-2">
                  Florida Home-Buying Guide
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif text-[#292925] leading-tight mb-4">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-[#A99A87] pb-6 border-b border-[#E9DFD0]">
                  <span>Published {selectedPost.publicationDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>By ronysellshomes</span>
                  <span aria-hidden="true">·</span>
                  <span>D.R. Horton New Home Consultant</span>
                </div>
              </div>

              {/* Key Takeaways Box */}
              <div className="p-6 bg-[#E9DFD0]/40 border border-[#D5C2A5] mb-8">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#292925] mb-3">
                  <Bookmark className="w-4 h-4 text-[#B69A70]" />
                  <span>Key Article Takeaways</span>
                </div>
                <ul className="space-y-2">
                  {selectedPost.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#493B32]">
                      <span className="w-1.5 h-1.5 bg-[#B69A70] rounded-full mt-2 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Content Paragraphs */}
              <div className="space-y-5 text-sm sm:text-base text-[#493B32] leading-relaxed font-light mb-10">
                {selectedPost.contentParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Optional Checklist */}
              {selectedPost.checklist && (
                <div className="p-6 bg-[#FAF8F4] border border-[#D5C2A5] mb-10">
                  <h4 className="text-xs font-semibold tracking-wider uppercase text-[#292925] mb-3">
                    Recommended Action Checklist:
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedPost.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#493B32]">
                        <CheckCircle2 className="w-4 h-4 text-[#B69A70] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Footer & Consultation CTA */}
              <div className="p-6 bg-[#E9DFD0]/50 border border-[#D5C2A5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg text-[#292925]">
                    Have Questions on This Topic?
                  </h4>
                  <p className="text-xs text-[#493B32]">
                    Connect directly with me to discuss how this applies to your new-home search in Florida.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenConnectModal();
                  }}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#493B32] text-[#FAF8F4] hover:bg-[#292925] transition-colors whitespace-nowrap shrink-0"
                >
                  Ask a Question
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
