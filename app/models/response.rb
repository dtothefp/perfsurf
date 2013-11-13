class Response

  def initialize(obj)
    @http_obj = obj
  end

  def get_http_obj
    @http_obj
  end
  
  def timestamp_to_object
    full_stats = {}
    prev_day = ""
    time_data = {}
    @http_obj.each do |response|
      day = Time.at(response["timestamp"]).strftime("%A, %b %e")
      hour = Time.at(response["timestamp"]).strftime("%l%p")

      if day == prev_day
        time_data[hour] = { swell: response["swell"], wind: response["wind"], charts: response["charts"] }
        full_stats[day] = [time_data]
      else
        time_data = {}
        time_data[hour] = { swell: response["swell"], wind: response["wind"], charts: response["charts"] }
        full_stats[day] = [time_data]
      end
      prev_day = day
      
    end
    return full_stats
  end

end
