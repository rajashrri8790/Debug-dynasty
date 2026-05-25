using System;
using System.Collections.Generic;

namespace BDDTests.Models;

public partial class Payment
{
    public int Id { get; set; }

    public int BookingId { get; set; }

    public string PaymentMethod { get; set; } = null!;

    public decimal Amount { get; set; }

    public string? PaymentStatus { get; set; }

    public string? TransactionId { get; set; }

    public DateTime? PaidAt { get; set; }

    public virtual Booking Booking { get; set; } = null!;
}
