module LocationsHelper

  def timestamp_to_array(response)
      stamp = Time.at(response["timestamp"])
      time = {};
      time[:full_time] = stamp.strftime("%A, %b %e %l%p")
      time[:date] = stamp.strftime("%A, %b %e")
      time[:hour] = stamp.strftime("%l%p")
      return time
  end

end