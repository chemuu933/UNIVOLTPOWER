import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { About } from '../About';

// Behaviors covered:
// 1. Renders page landmark and main heading with correct accessible attributes
// 2. Displays the hero descriptive paragraphs
// 3. Renders mission and values cards with correct titles and list items
// 4. Shows company statistics with expected values and labels
// 5. Renders the Why Choose Univoltpower section with four feature cards and icons
// 6. Displays certifications & partnerships grid with expected items
// 7. Image section has correct alt text and lazy loading


describe('About Page', () => {
  it('renders the page container with aria label and main heading', () => {
    render(<About />);
    const container = screen.getByLabelText('About Page');
    expect(container).toBeInTheDocument();

    const heading = screen.getByRole('heading', { level: 1, name: /about univoltpower/i });
    expect(heading).toBeVisible();

    const aboutSection = screen.getByRole('region', { name: /mission and values/i });
    expect(aboutSection).toBeInTheDocument();
  });

  it('displays the hero paragraphs describing challenges and mission', () => {
    render(<About />);

    expect(
      screen.getByText(/electricity tariffs continue to rise/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/univolt power ltd was established to solve these challenges/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/we serve commercial & industrial clients/i)
    ).toBeInTheDocument();
  });

  it('renders mission and values with correct titles and value list items', () => {
    render(<About />);

    expect(screen.getByRole('heading', { level: 2, name: /our mission/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /our values/i })).toBeInTheDocument();

    const values = [
      /quality without compromise/i,
      /customer-centric approach/i,
      /environmental responsibility/i,
      /innovation and continuous improvement/i,
      /transparency and integrity/i,
    ];

    values.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('shows company statistics with expected numbers and labels', () => {
    render(<About />);

    const statsRegion = screen.getByRole('region', { name: /company statistics/i });
    expect(statsRegion).toBeInTheDocument();

    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText(/projects completed/i)).toBeInTheDocument();

    expect(screen.getByText('50MW+')).toBeInTheDocument();
    expect(screen.getByText(/solar installed/i)).toBeInTheDocument();

    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText(/years experience/i)).toBeInTheDocument();

    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText(/customer satisfaction/i)).toBeInTheDocument();
  });

  it('renders the Why Choose Univoltpower section with 4 feature cards', () => {
    render(<About />);

    const whyHeading = screen.getByRole('heading', { level: 2, name: /why choose univoltpower\?/i });
    expect(whyHeading).toBeInTheDocument();

    // Check the four feature card headings
    const features = [
      /certified excellence/i,
      /expert team/i,
      /custom solutions/i,
      /lifetime support/i,
    ];

    features.forEach((name) => {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument();
    });

    // Check supporting descriptions
    expect(
      screen.getByText(/iso certified and accredited/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/50\+ certified solar engineers/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/tailored solar systems designed/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ongoing maintenance and 24\/7 customer support/i)
    ).toBeInTheDocument();
  });

  it('displays certifications & partnerships grid with expected items', () => {
    render(<About />);

    const certsHeading = screen.getByRole('heading', { level: 2, name: /certifications & partnerships/i });
    expect(certsHeading).toBeInTheDocument();

    const items = [
      /iso 9001:2015/i,
      /quality management/i,
      /nabcep/i,
      /certified installers/i,
      /seia member/i,
      /solar energy industries/i,
      /tesla certified/i,
      /powerwall installer/i,
    ];

    items.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('renders the image with proper alt text and lazy loading', () => {
    render(<About />);

    const img = screen.getByAltText('Solar engineers installing photovoltaic panels') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.loading).toBe('lazy');
  });
});
