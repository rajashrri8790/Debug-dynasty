using System;
using System.Collections.Generic;

namespace BDDTests.Models;

public partial class Cancellation
{
    public int Id { get; set; }

    public int BookingId { get; set; }

    public string? Reason { get; set; }

    public decimal? RefundAmount { get; set; }

    public string? CancellationStatus { get; set; }

    public DateTime? CancelledAt { get; set; }

    public virtual Booking Booking { get; set; } = null!;
}
