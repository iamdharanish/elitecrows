import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const yellow = '#FFC107'   // Consistent yellow from navigation
  const accentBlue = '#0071E3'

  return (
    <footer style={{
      background: '#F5F5F7',
      borderTop: '1px solid #E5E5E7',
    }}>
      <div className="container" style={{ padding: '64px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>

          {/* Brand – matches Navigation logo style */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              {/* Black background wrapper for logo (identical to nav) */}
              <div style={{
                background: '#000000',
                borderRadius: '10px',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
              }}>
                <img 
                  src="/eclogo.png" 
                  alt="EliteCrows logo" 
                  style={{ height: '20px', width: 'auto', display: 'block' }}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  color: '#1D1D1F',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}>
                  ELITE<span style={{ color: yellow }}> CROWS</span>
                </div>
                <div style={{
                  fontSize: '10px',
                  color: yellow,                         // Changed from gray to yellow
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  Infotech
                </div>
              </div>
            </Link>
            <p style={{ fontSize: '13px', color: '#86868B', lineHeight: 1.75, maxWidth: '220px' }}>
              Technology-driven solutions for businesses that demand excellence worldwide.
            </p>
          </div>

          {/* Services (unchanged, uses accent blue for headings) */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accentBlue, marginBottom: '16px' }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Web Development', 'Software Development', 'AI & Machine Learning', 'Cloud & DevOps', 'Digital Marketing', 'Cybersecurity'].map(s => (
                <span key={s} style={{ fontSize: '13px', color: '#86868B', cursor: 'default', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1D1D1F')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#86868B')}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accentBlue, marginBottom: '16px' }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Portfolio', '/portfolio'], ['Careers', '/careers'], ['Contact', '/contact']].map(([label, path]) => (
                <Link key={path} to={path} style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  fontSize: '13px', color: '#86868B', textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = accentBlue)}
                  onMouseLeave={e => (e.currentTarget.style.color = '#86868B')}
                >
                  {label}
                  <ArrowUpRight size={10} />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accentBlue, marginBottom: '16px' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={14} color="#A1A1A6" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#86868B', lineHeight: 1.5 }}>
                  Gobichettipalayam, Tamil Nadu, India
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={14} color="#A1A1A6" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#86868B' }}>+91 6383106107</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={14} color="#A1A1A6" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#86868B' }}>elitecrowsindia@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        <div style={{ height: '1px', background: '#E5E5E7', margin: '0 0 24px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#A1A1A6' }}>
            © {new Date().getFullYear()} EliteCrows Infotech. All rights reserved.
          </span>
          <span style={{ fontSize: '12px', color: '#A1A1A6' }}>
            Designed & Developed by{' '}
            <span style={{ color: yellow, fontWeight: 600 }}>EliteCrows</span>   {/* Changed from blue to yellow */}
          </span>
        </div>
      </div>
    </footer>
  )
}
