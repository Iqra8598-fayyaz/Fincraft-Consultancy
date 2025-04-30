$images = @(
    @{
        url = "https://placehold.co/1920x1080/1e40af/ffffff?text=Professional+Tax+Consulting"
        output = "public/images/hero.jpg"
    },
    @{
        url = "https://placehold.co/800x600/1e40af/ffffff?text=Personal+Tax+Planning"
        output = "public/images/personal-tax.jpg"
    },
    @{
        url = "https://placehold.co/800x600/1e40af/ffffff?text=Business+Tax+Solutions"
        output = "public/images/business-tax.jpg"
    },
    @{
        url = "https://placehold.co/800x600/1e40af/ffffff?text=Audit+Compliance"
        output = "public/images/audit.jpg"
    },
    @{
        url = "https://placehold.co/1920x1080/1e40af/ffffff?text=Client+Testimonials"
        output = "public/images/testimonial-bg.jpg"
    },
    @{
        url = "https://placehold.co/200x200/1e40af/ffffff?text=Sarah+Johnson"
        output = "public/images/avatar.jpg"
    },
    @{
        url = "https://placehold.co/1920x1080/1e40af/ffffff?text=Contact+Us+Today"
        output = "public/images/cta-bg.jpg"
    },
    @{
        url = "https://placehold.co/1920x1080/1e40af/ffffff?text=Tax+Services"
        output = "public/images/services-hero.jpg"
    }
)

foreach ($image in $images) {
    Invoke-WebRequest -Uri $image.url -OutFile $image.output
    Write-Host "Downloaded $($image.output)"
} 