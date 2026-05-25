using System;
using System.Collections.Generic;

namespace BDDTests.Models;

public partial class Booking
{
    public int Id { get; set; }

    public int CustomerId { get; set; }

    public int RoomId { get; set; }

    public DateTime CheckInDate { get; set; }

    public DateTime CheckOutDate { get; set; }

    public int NumberOfGuests { get; set; }

    public decimal TotalAmount { get; set; }

    public string? BookingStatus { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual Cancellation? Cancellation { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual Payment? Payment { get; set; }

    public virtual Room Room { get; set; } = null!;
}
